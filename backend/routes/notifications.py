from flask import Blueprint, jsonify
from models import ProposedChange

notifications_bp = Blueprint('notifications', __name__)

@notifications_bp.route('/api/notifications')
def list_notifications():
    changes = ProposedChange.query.order_by(ProposedChange.id.desc()).all()
    return jsonify([{
        'id': c.id,
        'public_notification': c.public_notification
    } for c in changes if c.public_notification])
