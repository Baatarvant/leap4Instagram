import path from 'node:path';
import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typesArray = loadFilesSync(path.join(
    '.'
), {
    extensions: ['graphql'],
})

export const typeDefs = mergeTypeDefs(typesArray)
