import React, { useMemo } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { usePosition, useViewportDimensions } from 'utils/hooks'

const BOUNDARY_THRESHOLD = 40

type PositionTypes = 'top' | 'bottom'
type ShiftTypes = 'left' | 'right' | null

type Props = {
  children: React.ReactNode,
  anchorElRef: React.RefObject<HTMLDivElement>
}

type TooltipTextProps = {
  position: PositionTypes
  shift: ShiftTypes
}

const Tooltip = ({ children, anchorElRef }: Props) => {
  const anchorElCoords = usePosition(anchorElRef.current)
  const { viewportWidth } = useViewportDimensions()

  const position: PositionTypes = useMemo(() => {
    if (!anchorElCoords) return 'top'

    const { top } = anchorElCoords
    if (top < BOUNDARY_THRESHOLD) return 'bottom'

    return 'top'
  }, [anchorElCoords])

  const shift: ShiftTypes = useMemo(() => {
    if (!anchorElCoords) return null

    const { right, left } = anchorElCoords
    if (left < BOUNDARY_THRESHOLD) return 'right'
    if (right > viewportWidth - BOUNDARY_THRESHOLD) return 'left'

    return null
  }, [anchorElCoords, viewportWidth])

  return <TooltipText position={position} shift={shift}>{children}</TooltipText>
}

export default Tooltip

const TooltipText = styled.div<TooltipTextProps>`
  width: fit-content;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;

  ::after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }

  ${() =>
    variant({
      prop: 'position',
      variants: {
        top: {
          bottom: '145%',
          left: '50%',
          transform: 'translateX(-50%)',
          '::after': {
            top: '100%',
            left: '50%',
            'margin-left': '-5px',
            'border-color': '#555 transparent transparent transparent'
          }
        },

        bottom: {
          top: '150%',
          left: '50%',
          transform: 'translateX(-50%)',
          '::after': {
            bottom: '100%',
            left: '50%',
            'margin-left': '-5px',
            'border-color': 'transparent transparent #555 transparent'
          }
        }
      }
    })
  }

  ${() =>
    variant({
      prop: 'shift',
      variants: {
        left: {
          transform: 'translateX(-70%)'
        },

        right: {
          transform: 'translateX(-30%)'
        }
      }
    })
  }
`
