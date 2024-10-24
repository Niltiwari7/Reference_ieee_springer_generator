import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  // Replace with your actual profile URLs or use environment variables if needed
  const linkedInUrl = 'https://www.linkedin.com/in/your-linkedin-profile';
  const githubUrl = 'https://github.com/your-github-profile';

  return (
    <footer className="w-full bg-black text-white py-6 mt-auto">
      <div className="flex justify-center space-x-6 sm:space-x-8 lg:space-x-10">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-gray-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-gray-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p className="text-center mt-4 text-sm sm:text-base lg:text-lg">
        &copy; 2024 jniknil. All rights reserved.
      </p>
    </footer>
  );
}
