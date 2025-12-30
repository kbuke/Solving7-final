import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export function SocialMedia({ allSocials }) {
  return (
    <div className="pt-10">
      <h1>Contact Us</h1>

      <div className="grid grid-cols-3 gap-4">
        {allSocials.map((social, index) => (
          <div key={index} className="flex justify-center">
            <a
              href={social.url}
              className="social-icon"
            >
              <FontAwesomeIcon
                icon={
                  social.name.toLowerCase() === "linkedin"
                    ? faLinkedin
                    : faInstagram
                }
                className="social-icon-img"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
