import Title from "../Title"
import ProfileSection from "./ProfileSection"
import Button from "../Button"
import styles from "./styles.module.css"
import { useState } from "react"

export default function Profile(props) {
    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Você agora está seguindo!")
        setFollowText("Following")
    }

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.tel}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <Button href={props.githubUrl}>GitHub</Button>
                <Button href={props.linkedinUrl}>LinkedIn</Button>
                <Button href={props.instagramUrl}>Instagram</Button>

            </ProfileSection>
        </div>
    )
}