import { HTMLAttributes } from "react";
import styles from './Stack.module.scss';

type StackProps = HTMLAttributes<HTMLDivElement> & {
	spacing: string;
};

export default function Stack(props: StackProps) {
	return (
		// @ts-ignore
		<div className={styles.stack} style={{ ...props.style, '--spacing': props.spacing }}>
			{props.children}
		</div>
	);
}
