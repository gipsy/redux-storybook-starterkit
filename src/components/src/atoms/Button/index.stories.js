import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from 'storybook-addon-a11y'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action, decorateAction } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Button from '.'

storiesOf('Button', module)
  .addWithChapters(
    'Principles',
    {
      subtitle: 'Subtitle',
      info: `
        The front end team have worked to abstract the view layer out of Rails over to React enabling us to be much more component oriented in the code. At the same time, the design team have moved to Sketch and have started to build out a pattern library that will be updated and maintained directly alongside the living components.
      `,
      chapters: [
        // List of chapters
        {
          title: 'Button Component',
          subtitle: 'Based on standard React Button component',
          info: `
            Our Primary button colour is orange (#f6a623) aligning with progressive purchasing
            action associated with the button. The Secondary button colour is grey-medium
            associated with the explorative nature of the secondary CTA’s.
          `,
          sections: [
            // List of sections.
            {
              title: 'This is Default Button',
              subtitle: 'Each section can be used to render a component',
              sectionFn: () => (<Button label="My Button" onClick={() => { alert('Hello World!'); }}/>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: true,
              },
            },
            {
              title: 'This is Disabled Button',
              subtitle: 'Based on standard React Button component',
              sectionFn: () => (<Button label="My Disabled Button" disabled onClick={() => {}}/>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: true,
              },
            },
          ],
        },

      ],
    }
  )
