import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { Tooltip } from 'components/ui'

type Props = {
  scrollable?: boolean
}

type TextProps = {
  xCoord: 'left' | 'center' | 'right',
  yCoord: 'top' | 'center' | 'bottom'
}

const TooltipExample = ({ scrollable = false }: Props) => (
  <Container scrollable={scrollable}>
    <Box xCoord="left" yCoord='top'>
      <Tooltip info="Hi">
        Short tooltip
      </Tooltip>
    </Box>
    <Box xCoord="center" yCoord='top'>
      <Tooltip info="This is a tooltip">
        Tooltip example
      </Tooltip>
    </Box>
    <Box xCoord="right" yCoord='top'>
      <Tooltip
        info="This is a very very very veeeeeerrrrrrryyyyy long tooltip"
      >
        Long Tooltip
      </Tooltip>
    </Box>

    <Box xCoord="left" yCoord='center'>
      <Tooltip info="This is a tooltip">
        Tooltip example
      </Tooltip>
    </Box>
    <Box xCoord="center" yCoord='center'>
      <Tooltip info="This is a tooltip">
        Tooltip example
      </Tooltip>
    </Box>
    <Box xCoord="right" yCoord='center'>
      <Tooltip info="This is a tooltip">
        Tooltip example
      </Tooltip>
    </Box>

    <Box xCoord="left" yCoord='bottom'>
      <Tooltip info="This is a tooltip">
        Tooltip example
      </Tooltip>
    </Box>
    <Box xCoord="center" yCoord='bottom'>
      <Tooltip
        info="This is a very very very veeeeeerrrrrrryyyyy long tooltip"
      >
        Long Tooltip
      </Tooltip>
    </Box>
    <Box xCoord="right" yCoord='bottom'>
      <Tooltip info="Hi">
        Short tooltip
      </Tooltip>
    </Box>
  </Container>
)

export default TooltipExample

const Container = styled.div<Props>`
  position: relative;
  min-width: 100vw;

  ${() =>
    variant({
      prop: 'scrollable',
      variants: {
        true: {
          'min-height': '200vh'
        },
        false: {
          'min-height': '100vh'
        }
      }
    })
  }
`

const Box = styled.div<TextProps>`
  position: absolute;

  ${() =>
    variant({
      prop: 'xCoord',
      variants: {
        left: {
          left: '4px'
        },
        center: {
          left: '48%',
          '@media only screen and (max-width: 600px)': {
            left: '42%'
          }
        },
        right: {
          right: '4px'
        }
      }
    })
  }

  ${() =>
    variant({
      prop: 'yCoord',
      variants: {
        top: {
          top: '4px'
        },
        center: {
          top: '48%'
        },
        bottom: {
          bottom: '4px'
        }
      }
    })
  }
`
