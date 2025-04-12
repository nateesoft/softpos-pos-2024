import { materialRenderers } from "@jsonforms/material-renderers"

// custom layout
import BoxLayoutControl, { boxLayoutTester } from "./layouts/BoxLayout"
import GridLayoutControl, { gridLayoutTester } from "./layouts/GridLayout"
import StackLayoutControl, { stackLayoutTester } from "./layouts/StackLayout"
import GridVertical, { gridVerticalTester } from "./layouts/GridVertical"

// custom components
import TypographyControl, { typographyTester } from "./dataDisplay/Typography"
import TableData, { tableTester } from "./dataDisplay/Table"

import RadioGroupControl, { radioGroupTester } from "./inputs/RadioGroup"
import ButtonControl, { buttonTester } from "./inputs/Button"
import TextFieldControl, { textFieldTester } from "./inputs/TextField"
import IconButtonControl, { iconButtonTester } from "./inputs/IconButton"

export const renderers = [
  ...materialRenderers,
  { tester: boxLayoutTester, renderer: BoxLayoutControl },
  { tester: gridLayoutTester, renderer: GridLayoutControl },
  { tester: stackLayoutTester, renderer: StackLayoutControl },
  { tester: gridVerticalTester, renderer: GridVertical },
  { tester: typographyTester, renderer: TypographyControl },
  { tester: tableTester, renderer: TableData },
  { tester: radioGroupTester, renderer: RadioGroupControl },
  { tester: buttonTester, renderer: ButtonControl },
  { tester: textFieldTester, renderer: TextFieldControl },
  { tester: iconButtonTester, renderer: IconButtonControl },
]
