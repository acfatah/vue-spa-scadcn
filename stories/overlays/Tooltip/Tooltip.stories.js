import { CircleHelp as CircleHelpIcon } from 'lucide-vue-next'
import Button from '~/components/ui/button/Button.vue'
import Tooltip from '~/components/ui/tooltip/Tooltip.vue'

/**
 * Simplified tooltip component.
 *
 * See `Primitive Tooltip`.
 */
export default {
  title: 'Overlays/Tooltip/Default',
  component: Tooltip,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    height: 400,
    docs: {
      source: {
        code: `
<Tooltip text="Tooltip text">
  <!-- tooltip trigger -->
</Tooltip>
`,
      },
    },
  },

  args: {
    text: 'Add to library',
  },

  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'top',
        },
      },
    },

    text: {
      control: { type: 'text' },
    },
  },

  render: args => ({
    components: { Tooltip, Button },

    setup() {
      return { args }
    },

    template: `
      <div class="flex justify-center items-center h-[140px]">
        <Tooltip v-bind="args">
          <Button variant="outline">
            Hover
          </Button>
        </Tooltip>
      </div>
    `,
  }),
}

export const WithContentSlot = {
  parameters: {
    docs: {
      source: {
        code: `
<Tooltip>
  <template v-slot:content>
    <!-- tooltip content -->
  </template>
  <!-- tooltip trigger -->
</Tooltip>
`,
      },
    },
  },

  render: args => ({
    components: { Tooltip, Button, CircleHelpIcon },

    setup() {
      return { args }
    },

    template: `
      <div class="flex justify-center items-center h-[140px]">
        <Tooltip v-bind="args">
          <template v-slot:content>
            <div class="flex items-center">
              <CircleHelpIcon class="mr-1" size="16" />
              <span>Elements from slot</span>
            </div>
          </template>
          <Button variant="outline">
            Hover
          </Button>
        </Tooltip>
      </div>
    `,
  }),
}
