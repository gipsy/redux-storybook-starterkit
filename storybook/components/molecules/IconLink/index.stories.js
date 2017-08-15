import React from 'react'
import { storiesOf } from '@storybook/react'
import IconLink from '~/src/components/molecules/IconLink'

storiesOf('Components/Molecules', module)
  .addWithChapters(
    'IconLink' ,
    {
      subtitle: 'IconLink Description',
      info: `
        The front end team have worked to abstract the view layer out of Rails over to React enabling us to be much more component oriented in the code. At the same time, the design team have moved to Sketch and have started to build out a pattern library that will be updated and maintained directly alongside the living components.
      `,
      chapters: [
        // List of chapters
        {
          title: 'IconLink Component',
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
                <IconLink icon="close" href="#">Hello</IconLink>
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
