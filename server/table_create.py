from app import app, db
from models import *

app_context = app.app_context()
app_context.push()

try:
    with app.app_context():
        db.create_all()
        db.session.commit()
    print("Tables created successfully")
except Exception as e:
    print("Error creating tables:", str(e))

app_context.pop()
