// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ShowStaticMarkup } from 'react-storybook-addon-static-markup'

import Icon from '~/src/components/atoms/Icon'

storiesOf('Components/Atoms', module)
  .addWithChapters(
    'Icon',
    {
      subtitle: 'Subtitle',
      info: `
        The front end team have worked to abstract the view layer out of Rails over to React enabling us to be much more component oriented in the code. At the same time, the design team have moved to Sketch and have started to build out a pattern library that will be updated and maintained directly alongside the living components.
      `,
      chapters: [
        // List of chapters
        {
          title: 'Icon Component',
          subtitle: 'Based on standard React Button component',
          info: `
            Our Icon colour is orange (#f6a623) aligning with progressive purchasing
            action associated with the button. The Secondary button colour is grey-medium
            associated with the explorative nature of the secondary CTA’s.
          `,
          sections: [
            // List of sections
            {
              title: 'This is Default Button',
              subtitle: 'Each section can be used to render a component',
              sectionFn: () => (<Icon icon="close" />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: true,
              },
            },
            {
              title: 'This is Static Buttons appearance',
              subtitle: 'Some additional information',
              sectionFn: () => (
                <ShowStaticMarkup>
                  <div className="foo bar baz">
                    test!
                  </div>
                </ShowStaticMarkup>
              ),
              options: {
                showSource: false,
                allowSourceToggling: false,
                showPropTables: false,
                allowPropTablesToggling: false,
              }
            },
          ],
        },
      ],
    },
  )
