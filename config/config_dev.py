import os

class BaseConfig(object):
    DEBUG = False
    SECRET_KEY = '5467890ydfshgjkljgrew2345678908trdfgjhk'

class DevConfig(BaseConfig):
    DEBUG = True

class ProdConfig(BaseConfig):
    DEBUG = False

