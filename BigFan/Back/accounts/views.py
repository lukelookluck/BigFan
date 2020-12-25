from django.shortcuts import redirect 
from django.http import JsonResponse 
import os, json, requests
from pathlib import Path
from .models import User
from rest_framework_jwt.settings import api_settings

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER




BASE_DIR = Path(__file__).resolve().parent.parent

with open(os.path.join(BASE_DIR, 'secrets.json')) as secret_file:
    secrets = json.load(secret_file)


# code 요청
def kakao_login(request):
    client_id = secrets['KAKAO']['REST_API_KEY']
    redirect_uri = secrets['KAKAO']['MAIN_DOMAIN'] + "/accounts/login/kakao/callback/"
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    )
    
    
# access token 요청
def kakao_callback(request):                      
        try:
            code = request.GET.get("code")
            client_id = secrets['KAKAO']['REST_API_KEY']
            redirect_uri = secrets['KAKAO']['MAIN_DOMAIN'] + "/accounts/login/kakao/callback/"

            token_request = requests.get(
                f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&redirect_uri={redirect_uri}&code={code}"
            )

            token_json = token_request.json()
            error = token_json.get("error",None)

            if error is not None :
                return JsonResponse({"message": "INVALID_CODE"}, status = 400)

            access_token = token_json.get("access_token")

            #------get kakaotalk profile info------#

            profile_request = requests.get(
                "https://kapi.kakao.com/v2/user/me", headers={"Authorization" : f"Bearer {access_token}"},
            )
            profile_json = profile_request.json()

            kakao_account = profile_json.get("kakao_account")
            email = kakao_account.get("email", None)
            kakao_id = profile_json.get("id")
            print('profile_json: ', profile_json, kakao_id)

        except KeyError:
            return JsonResponse({"message" : "INVALID_TOKEN"}, status = 400)

        except access_token.DoesNotExist:
            return JsonResponse({"message" : "INVALID_TOKEN"}, status = 400)
           
        if User.objects.filter(kakao_id = kakao_id).exists():
            user = User.objects.get(kakao_id = kakao_id)
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)

            return JsonResponse({"token" : token}, status=200)

        else :
            User(
                kakao_id = kakao_id,
                username = email,
                email    = email,
            ).save()

            user = User.objects.get(kakao_id = kakao_id)
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)

            return JsonResponse({"token" : token}, status = 200)
