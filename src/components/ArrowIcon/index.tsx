interface ArrowIconProps {
	styles?: string
}

function ArrowIcon({ styles }: ArrowIconProps): JSX.Element {
	return (
		<div className={styles}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xml-space="preserve"
				viewBox="0 0 512 512"
				fill="#fff"
				width="100%"
				height="100%"
			>
				<path d="M315.1 48.6H196.9l157.6 157.5H0v78.8h354.5L196.9 442.4h118.2L512 245.5z" />
			</svg>
		</div>
	)
}

export default ArrowIcon
