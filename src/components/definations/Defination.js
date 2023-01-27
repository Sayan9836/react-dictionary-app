import React from 'react'
import './Defination.css'
import ReactAudioPlayer from 'react-audio-player';
const Defination = ({ word, meanings, category }) => {
    return (
        <div className='meanings'>
            {
                meanings[0] && word && category === "en" && (
                    <ReactAudioPlayer
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{ backgroundColor: "#fff", borderRadius: '10' }}
                        autoPlay
                        controls
                    >
                        Your Brower does not support the audio element
                    </ReactAudioPlayer>
                )}
            {
                word === "" ? (
                    <span className='subtitle'>Start by typing a word</span>
                ) : (
                    meanings.map((mean) =>
                        mean.meanings.map((item) =>
                            item.definitions?.map((def) => {
                                return <div key={Math.random()} className='singleMean' style={{ backgroundColor: "white", color: "black" }}>
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {
                                        def.example && (
                                            <span>
                                                <b>Example:</b>{def.example}
                                            </span>
                                        )
                                    }
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            })

                        )
                    )
                )
            }
        </div>
    )
}

export default Defination
