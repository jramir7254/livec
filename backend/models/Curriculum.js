import mongoose from 'mongoose';

const curriculumSchema = new mongoose.Schema({
  segmentId: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  lastModifiedBy: { type: String }, 
  lastModifiedAt: { type: Date, default: Date.now },
});

const Curriculum = mongoose.model('Curriculum', curriculumSchema);

export default Curriculum;
