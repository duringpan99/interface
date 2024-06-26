import { FORQuote, FORServiceProvider } from 'uniswap/src/features/fiatOnRamp/types'

export function getServiceProviderForQuote(
  quote: FORQuote | undefined,
  serviceProviders: FORServiceProvider[] | undefined
): FORServiceProvider | undefined {
  return serviceProviders?.find((sp) => sp.serviceProvider === quote?.serviceProvider)
}
