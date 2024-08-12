import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    `
    const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #FF6060;
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

function Card({ title, picture }) {
    return (
        <CardWrapper>
            <CardImage src={picture} alt="apartment" height={340} width={340} />
            <span>{title}</span>
        </CardWrapper>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}   

Card.defaultProps = {
    title: "", 
    picture:"", 
}

export default Card;