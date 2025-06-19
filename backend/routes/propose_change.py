from flask import Blueprint, request, jsonify
from models import db, ProposedChange

propose_change_bp = Blueprint('propose_change', __name__)

@propose_change_bp.route('/api/propose-change', methods=['POST'])
def propose_change():
    data = request.get_json()
    change = ProposedChange(
        level=data.get('level'),
        action=data.get('action'),
        element_id=data.get('elementId'),
        details=data.get('details'),
        status='received',
        public_notification='Change received and is under consideration'
    )
    db.session.add(change)
    db.session.commit()
    return jsonify({'message': 'Proposed change submitted and publicly acknowledged'}), 201
