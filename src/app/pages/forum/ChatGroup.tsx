/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_molekul/helpers'
import { ChatInner } from './components/ChatInner'

const ChatGroup: FC = () => {
  return (
    <div className='d-flex flex-column flex-lg-row shadow-sm rounded pt-2' style={{ justifyContent: 'center', alignContent: 'center' }}>
      <div>
        <iframe width="1250" height="600" src="https://villageharmony.fun:9001" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera https://villageharmony.fun:9001; microphone https://villageharmony.fun:9001" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default ChatGroup
