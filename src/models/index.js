// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { Blog, Post, Comment } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  PostStatus
};