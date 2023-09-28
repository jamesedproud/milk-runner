from app import app
from routes import bp as api_bp

app.register_blueprint(api_bp)

if __name__ == "__main__":
    app.run()
