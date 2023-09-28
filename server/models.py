from app import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Numeric(precision=10, scale=2), nullable=False)

    def __repr__(self):
        return f"Event: {self.title}"

    def __init__(self, title, description, price):
        self.title = title
        self.description = description
        self.price = price
