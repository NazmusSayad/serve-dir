import { t } from 'noarg'
import arg from '../arg'
import get from './server-starter'

arg
  .create('get', {
    description: 'Download file from server',
    flags: {
      output: t.string().default('.').aliases('o'),
      code: t.number().aliases('c').min(1).max(9999),
    },
    config: {},
  })
  .on((_, options) => {
    get({
      output: options.output,
      code: options.code,
    })
  })
