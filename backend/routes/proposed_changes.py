from flask import Blueprint, jsonify, request
from models import db, ProposedChange

proposed_changes_bp = Blueprint('proposed_changes', __name__)

@proposed_changes_bp.route('/api/proposed-changes/pending')
def get_pending_changes():
    pending = ProposedChange.query.filter_by(status='received').all()
    return jsonify([
        {
            'id': p.id,
            'level': p.level,
            'action': p.action,
            'details': p.details
        } for p in pending
    ])

@proposed_changes_bp.route('/api/proposed-changes/<int:change_id>/triage', methods=['POST'])
def triage_change(change_id):
    data = request.get_json()
    decision = data.get('decision')
    if decision not in ['desk_reject', 'ae_review', 'external_review']:
        return jsonify({'error': 'Invalid triage decision'}), 400

    change = ProposedChange.query.get_or_404(change_id)
    change.status = decision
    db.session.commit()
    return jsonify({'message': f'Change {change_id} triaged as {decision}'}), 200
