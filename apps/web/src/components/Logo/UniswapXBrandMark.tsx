import { Trans } from 'i18n'
import { ThemedText } from 'theme/components'

import UniswapXRouterLabel, { UnswapXRouterLabelProps } from '../RouterLabel/UniswapXRouterLabel'

type UniswapXBrandMarkProps = Omit<UnswapXRouterLabelProps, 'children' | 'fontWeight'> & {
  fontWeight?: 'bold'
}

export default function UniswapXBrandMark({ fontWeight, ...props }: UniswapXBrandMarkProps): JSX.Element {
  return (
    <UniswapXRouterLabel {...props}>
      <ThemedText.BodySecondary
        fontSize="inherit"
        {...(fontWeight === 'bold' && {
          fontWeight: 535,
        })}
      >
        <Trans i18nKey="common.uniswapX" />
      </ThemedText.BodySecondary>
    </UniswapXRouterLabel>
  )
}
