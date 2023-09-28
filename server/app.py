# /Users/james/Desktop/Portfolio/milk-runner/server/venv/bin/python

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


password = "Esterel2008$"

db = SQLAlchemy()

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://postgres:{password}@localhost/milkrunner'
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
