import { Path } from "./path.ts";

export function getBaseDirectory() {
	return new Path(Deno.execPath()).parent_dir;
}

export function getOS() {
	const os = Deno.build.os;
	const arch = Deno.build.arch;
	return `${os}-${arch}`;
}

export function isDenoForUIX() {
	return getBaseDirectory().toString().includes(".uix");
}