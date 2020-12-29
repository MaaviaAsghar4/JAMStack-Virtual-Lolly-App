import React from "react"
import Lolly, { LollyProp } from "../src/components/Lolly"
import { Story } from "@storybook/react/types-6-0"

export default {
    component: Lolly,
    title: "lolly",
}

const Template: Story<LollyProp> = args => <Lolly {...args} />

export const Default = Template.bind({})
Default.args = {
  topColor: "blue",
  middleColor: "green",
  bottomColor: "blue",
}