from django.shortcuts import redirect 
import os, json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

with open(os.path.join(BASE_DIR, 'secrets.json')) as secret_file:
    secrets = json.load(secret_file)


# code 요청
def kakao_login(request):
    app_rest_api_key = secrets['KAKAO']['REST_API_KEY']
    redirect_uri = secrets['KAKAO']['MAIN_DOMAIN'] + "/account/login/kakao/callback/"
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={app_rest_api_key}&redirect_uri={redirect_uri}&response_type=code"
    )
    
    
# access token 요청
def kakao_callback(request):                      

    return redirect(f'http://127.0.0.1:8000')   