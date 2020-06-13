import React, { useState, useCallback, useRef, useEffect } from 'react'
import styled from 'styled-components'

import Tooltip from './tooltip-text'

type Props = {
  children: React.ReactNode,
  info: string
}

const TooltipContainer = ({ children, info }: Props) => {
  const [isTooltipShown, setIsTooltipShown] = useState(false)
  const anchorElRef = useRef(null)

  const handleShowTooltip = useCallback(
    () => setIsTooltipShown(true), []
  )

  const handleHideTooltip = useCallback(
    () => setIsTooltipShown(false), []
  )

  useEffect(() => {
    window.addEventListener('scroll', handleHideTooltip)
    window.addEventListener('resize', handleHideTooltip)

    return () => {
      window.removeEventListener('scroll', handleHideTooltip)
      window.removeEventListener('resize', handleHideTooltip)
    }
  }, [handleHideTooltip])

  return (
    <Container>
      {isTooltipShown && (
        <Tooltip anchorElRef={anchorElRef}>{info}</Tooltip>
      )}
      <AnchorEl
        ref={anchorElRef}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
      >
        {children}
      </AnchorEl>
    </Container>
  )
}

export default TooltipContainer

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const AnchorEl = styled.div`
  cursor: help;
`
