import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { SHDW_ETH, USDT, WBTC_ETH } from '@pancakeswap/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT[ChainId.ETHEREUM],
  shdw: SHDW_ETH[ChainId.ETHEREUM],
  wbtc: WBTC_ETH,
}
