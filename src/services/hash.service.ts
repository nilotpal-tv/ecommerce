import { compare as bcryptCompare, hash as bcryptHash } from 'bcrypt';
import httpErrors from 'http-errors';

class HashService {
  async hash(data: string | Buffer, round = 13): Promise<string> {
    try {
      const saltRound = round >= 13 ? round : 13;
      return await bcryptHash(data, saltRound);
    } catch (error) {
      throw new httpErrors.InternalServerError(
        'Something went wrong. Please try again.',
      );
    }
  }

  async compare(
    data: string | Buffer,
    encryptedData: string,
  ): Promise<boolean> {
    try {
      return await bcryptCompare(data, encryptedData);
    } catch (error) {
      throw new httpErrors.InternalServerError(
        'Something went wrong. Please try again.',
      );
    }
  }
}

export default new HashService();
