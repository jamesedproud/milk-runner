from flask import Blueprint, jsonify, request
from app import db
from models import Product

bp = Blueprint('api', __name__)


# Create product - ADMIN
@bp.route("/products", methods=['POST'])
def create_product():
    title = request.json['title']
    description = request.json['description']
    price = request.json['price']
    product = Product(title, description, price)
    db.session.add(product)
    db.session.commit()
    return jsonify({
        "id": product.id,
        "title": product.title,
        "description": product.description,
        "price": product.price})


# Create product - ADMIN
@bp.route("/products/<id>", methods=['DELETE'])
def delete_product(id):
    product = Product.query.filter_by(id=id).one()
    db.session.delete(product)
    db.sessio.commit()
    return 'Product Deleted'


# Get all products
@bp.route("/products", methods=['GET'])
def get_products():
    products = Product.query.all()
    product_list = []
    for product in products:
        product_list.append({
            "id": product.id,
            "title": product.title,
            "description": product.description,
            "price": str(product.price)
        })
    return jsonify(product_list)


# Get single product
@bp.route("/products/<id>", methods=['GET'])
def get_product(id):
    product = Product.query.filter_by(id=id).one()
    return jsonify({
        "id": product.id,
        "title": product.title,
        "description": product.description,
        "price": product.price})
