import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 min-w-0 overflow-hidden">
          <img src="/logo.png" alt={appName} className="h-6 w-auto shrink-0" />
          <img src="/title.png" alt={appName} className="h-5 w-auto min-w-0 max-w-[140px] object-contain object-left" />
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
