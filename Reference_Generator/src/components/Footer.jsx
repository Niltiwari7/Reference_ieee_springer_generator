import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white py-4 mt-auto">
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <p className="text-center mt-2">&copy; 2024 jniknil . All rights reserved.</p>
      </footer>
  )
}
