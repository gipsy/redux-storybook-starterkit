import React from 'react'
import { storiesOf } from '@storybook/react'
import Category from '~/src/components/molecules/Category'

storiesOf('Components/Molecules', module)
  .addWithChapters(
    'Category' ,
    {
      subtitle: 'Category Description',
      info: `
        The front end team have worked to abstract the view layer out of Rails over to React enabling us to be much more component oriented in the code. At the same time, the design team have moved to Sketch and have started to build out a pattern library that will be updated and maintained directly alongside the living components.
      `,
      chapters: [
        // List of chapters
        {
          title: 'Category Component',
          subtitle: 'New Category Component',
          info: `
            Our primary Category is transparent.
          `,
          sections: [
            // List of sections
            {
              title: 'This is default Category component',
              subtitle: 'Use this component in your project',
              sectionFn: () => (
                <Category
                  icon="code"
                  responsive
                  width={46}
                  height={26}
                  onClick={() => { alert('Hello World!'); }}
                >
                  tech / project
                </Category>
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: true,
              },
            },
          ]
        }
      ]
    }
  )
