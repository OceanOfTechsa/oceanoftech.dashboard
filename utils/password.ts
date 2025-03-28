import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function saltAndHashPassword(password: never) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
}
