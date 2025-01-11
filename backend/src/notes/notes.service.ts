import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { UserDocument } from '../auth/schemas/user.schema';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(
    createNoteDto: CreateNoteDto,
    user: UserDocument,
  ): Promise<Note> {
    const createdNote = new this.noteModel({
      ...createNoteDto,
      user: user._id,
    });
    return createdNote.save();
  }

  async findAll(user: UserDocument): Promise<Note[]> {
    return this.noteModel.find({ user: user._id }).exec();
  }

  async findOne(id: string, user: UserDocument): Promise<Note> {
    const note = await this.noteModel
      .findOne({ _id: id, user: user._id })
      .exec();
    if (!note) {
      throw new NotFoundException('Заметка не найдена');
    }
    return note;
  }

  async update(
    id: string,
    updateNoteDto: UpdateNoteDto,
    user: UserDocument,
  ): Promise<Note> {
    const updatedNote = await this.noteModel
      .findOneAndUpdate({ _id: id, user: user._id }, updateNoteDto, {
        new: true,
      })
      .exec();

    if (!updatedNote) {
      throw new NotFoundException('Заметка не найдена');
    }
    return updatedNote;
  }

  async remove(id: string, user: UserDocument): Promise<void> {
    const result = await this.noteModel
      .deleteOne({ _id: id, user: user._id })
      .exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException('Заметка не найдена');
    }
  }
}
