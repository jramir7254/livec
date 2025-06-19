from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class ProposedChange(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    level = db.Column(db.String(100))
    action = db.Column(db.String(50))
    element_id = db.Column(db.String(100), nullable=True)
    details = db.Column(db.Text)
    status = db.Column(db.String(50))  
    public_notification = db.Column(db.String(255))
