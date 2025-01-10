// utils/icons.ts
import { IconType } from 'react-icons';
import { IconsManifest } from 'react-icons/lib';

// Update interface to handle the default export
export interface IconModuleImport {
  default: unknown;
  [key: string]: unknown;
}

export interface IconModule {
  [key: string]: IconType;
}

export async function getIcons(id: string): Promise<IconModule> {
  let importedModule: IconModuleImport;
  
  switch (id) {
    case 'ai':
      importedModule = await import('react-icons/ai');
      break;
    case 'bs':
      importedModule = await import('react-icons/bs');
      break;
    case 'bi':
      importedModule = await import('react-icons/bi');
      break;
    case 'ci':
      importedModule = await import('react-icons/ci');
      break;
    case 'cg':
      importedModule = await import('react-icons/cg');
      break;
    case 'di':
      importedModule = await import('react-icons/di');
      break;
    case 'fa':
      importedModule = await import('react-icons/fa');
      break;
    case 'fa6':
      importedModule = await import('react-icons/fa6');
      break;
    case 'fc':
      importedModule = await import('react-icons/fc');
      break;
    case 'fi':
      importedModule = await import('react-icons/fi');
      break;
    case 'gi':
      importedModule = await import('react-icons/gi');
      break;
    case 'go':
      importedModule = await import('react-icons/go');
      break;
    case 'gr':
      importedModule = await import('react-icons/gr');
      break;
    case 'hi':
      importedModule = await import('react-icons/hi');
      break;
    case 'hi2':
      importedModule = await import('react-icons/hi2');
      break;
    case 'im':
      importedModule = await import('react-icons/im');
      break;
    case 'io':
      importedModule = await import('react-icons/io');
      break;
    case 'io5':
      importedModule = await import('react-icons/io5');
      break;
    case 'lia':
      importedModule = await import('react-icons/lia');
      break;
    case 'lu':
      importedModule = await import('react-icons/lu');
      break;
    case 'md':
      importedModule = await import('react-icons/md');
      break;
    case 'pi':
      importedModule = await import('react-icons/pi');
      break;
    case 'ri':
      importedModule = await import('react-icons/ri');
      break;
    case 'rx':
      importedModule = await import('react-icons/rx');
      break;
    case 'si':
      importedModule = await import('react-icons/si');
      break;
    case 'sl':
      importedModule = await import('react-icons/sl');
      break;
    case 'tb':
      importedModule = await import('react-icons/tb');
      break;
    case 'tfi':
      importedModule = await import('react-icons/tfi');
      break;
    case 'ti':
      importedModule = await import('react-icons/ti');
      break;
    case 'vsc':
      importedModule = await import('react-icons/vsc');
      break;
    case 'wi':
      importedModule = await import('react-icons/wi');
      break;
    default:
      throw new Error(`Icon set ${id} not found`);
  }

  // Filter out the default export and non-IconType entries
  const icons: IconModule = {};
  Object.entries(importedModule).forEach(([key, value]) => {
    if (key !== 'default' && typeof value === 'function') {
      icons[key] = value as IconType;
    }
  });

  return icons;
}

// Export IconsManifest for convenience
export { IconsManifest };
