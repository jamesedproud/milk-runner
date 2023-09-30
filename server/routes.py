from flask import Blueprint, jsonify, request
from app import db
from models import Product, Category

bp = Blueprint('api', __name__)


# Create product - ADMIN
@bp.route("/products", methods=['POST'])
def create_product():
    title = request.json['title']
    description = request.json['description']
    price = request.json['price']
    imgpath = request.json['imgpath']
    category_id = request.json['category_id']
    product = Product(title, description, price, imgpath, category_id)
    db.session.add(product)
    db.session.commit()
    return jsonify({
        "id": product.id,
        "title": product.title,
        "description": product.description,
        "price": product.price,
        "imgpath": product.imgpath,
        "category_id": product.category_id})


# Delete product - ADMIN
@bp.route("/products/<id>", methods=['DELETE'])
def delete_product(id):
    product = Product.query.filter_by(id=id).one()
    db.session.delete(product)
    db.session.commit()
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
            "price": str(product.price),
            "imgpath": product.imgpath
        })
    return jsonify(product_list)


# Get all products by category and category name
@bp.route("/products/category", methods=['GET'])
def get_category_and_products():
    category_id = request.args.get('category_id')

    # Fetch the category name by category ID
    category = Category.query.get(category_id)
    category_name = category.name if category else ""

    # Fetch products by category ID
    products = Product.query.filter_by(category_id=category_id).all()

    product_list = []
    for product in products:
        product_list.append({
            "id": product.id,
            "title": product.title,
            "description": product.description,
            "price": str(product.price),
            "imgpath": product.imgpath,
            "category_id": product.category_id
        })

    return jsonify({"categoryName": category_name, "products": product_list})


# Get single product
@bp.route("/products/<id>", methods=['GET'])
def get_product(id):
    # Join Product and Category tables to get the category name
    product = db.session.query(Product, Category.name).\
        join(Category, Product.category_id == Category.id).\
        filter(Product.id == id).first()

    if product:
        product_data, category_name = product
        return jsonify({
            "id": product_data.id,
            "title": product_data.title,
            "description": product_data.description,
            "price": product_data.price,
            "imgpath": product_data.imgpath,
            "category_id": product_data.category_id,
            "category_name": category_name  # Include the category name in the response
        })
    else:
        return jsonify({"error": "Product not found"}), 404
