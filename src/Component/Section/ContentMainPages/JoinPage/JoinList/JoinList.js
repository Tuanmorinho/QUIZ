import React from 'react'
import JoinListChild from './JoinListChild'

function JoinList({ exams }) {
    return (
        exams.map((exam, index) => (
            <JoinListChild key={index} exam={exam} />
        ))
    )
}

export default JoinList