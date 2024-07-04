import { Command, Option } from 'commander';
import { publishArticle, publishAllArticles, submitArticle, submitAllArticles } from './cli.art';

console.log(process.argv);

const program = new Command();

program
  .command('art:submit')
  .argument('<filepath>', 'Path to the myst project to submit')
  .argument('<collection>', 'The collection to submit to')
  .action(submitArticle);

program
  .command('art:submit:all')
  .argument(
    '<filepath>',
    'Path to a "year" folder containing a "sites" folder with myst projects to submit'
  )
  .argument('<collection>', 'The collection to submit to')
  .argument('[start]', 'Start at a specific project')
  .action(submitAllArticles);

program
  .command('art:publish')
  .argument('<filepath>', 'Path to the myst project to publish')
  .action(publishArticle);

program
  .command('art:publish:all')
  .argument(
    '<filepath>',
    'Path to a "year" folder containing a "sites" folder with myst projects to publish'
  )
  .action(publishAllArticles);

program.parse();
