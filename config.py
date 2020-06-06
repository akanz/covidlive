import os

class BaseConfig(object):
    DEBUG = False
    SECRET_KEY = os.environ.get('covidlive_secret')

class DevConfig(BaseConfig):
    DEBUG = True

class ProdConfig(BaseConfig):
    DEBUG = False

