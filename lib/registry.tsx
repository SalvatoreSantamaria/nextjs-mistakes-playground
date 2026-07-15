import type { ComponentType } from "react";

import { Wrong as W01 } from "@/components/mistakes/01-use-client-root/wrong";
import { Right as R01 } from "@/components/mistakes/01-use-client-root/right";
import { Wrong as W02 } from "@/components/mistakes/02-unprotected-server-actions/wrong";
import { Right as R02 } from "@/components/mistakes/02-unprotected-server-actions/right";
import { Wrong as W03 } from "@/components/mistakes/03-gets-in-use-server-file/wrong";
import { Right as R03 } from "@/components/mistakes/03-gets-in-use-server-file/right";
import { Wrong as W04 } from "@/components/mistakes/04-ai-code-without-review/wrong";
import { Right as R04 } from "@/components/mistakes/04-ai-code-without-review/right";
import { Wrong as W05 } from "@/components/mistakes/05-route-handlers-vs-rsc/wrong";
import { Right as R05 } from "@/components/mistakes/05-route-handlers-vs-rsc/right";
import { Wrong as W06 } from "@/components/mistakes/06-suspense-wrong-level/wrong";
import { Right as R06 } from "@/components/mistakes/06-suspense-wrong-level/right";
import { Wrong as W07 } from "@/components/mistakes/07-use-cache-vs-private/wrong";
import { Right as R07 } from "@/components/mistakes/07-use-cache-vs-private/right";
import { Wrong as W08 } from "@/components/mistakes/08-update-tag-vs-refresh/wrong";
import { Right as R08 } from "@/components/mistakes/08-update-tag-vs-refresh/right";
import { Wrong as W09 } from "@/components/mistakes/09-context-provider-layout/wrong";
import { Right as R09 } from "@/components/mistakes/09-context-provider-layout/right";
import { Wrong as W10 } from "@/components/mistakes/10-window-in-server-component/wrong";
import { Right as R10 } from "@/components/mistakes/10-window-in-server-component/right";
import { Wrong as W11 } from "@/components/mistakes/11-unnecessary-use-client/wrong";
import { Right as R11 } from "@/components/mistakes/11-unnecessary-use-client/right";
import { Wrong as W12 } from "@/components/mistakes/12-revalidate-after-mutation/wrong";
import { Right as R12 } from "@/components/mistakes/12-revalidate-after-mutation/right";
import { Wrong as W13 } from "@/components/mistakes/13-redirect-in-try-catch/wrong";
import { Right as R13 } from "@/components/mistakes/13-redirect-in-try-catch/right";
import { Wrong as W14 } from "@/components/mistakes/14-force-server-interactive/wrong";
import { Right as R14 } from "@/components/mistakes/14-force-server-interactive/right";
import { Wrong as W15 } from "@/components/mistakes/15-loading-tsx/wrong";
import { Right as R15 } from "@/components/mistakes/15-loading-tsx/right";
import { Wrong as W16 } from "@/components/mistakes/16-duplicate-fetch-metadata/wrong";
import { Right as R16 } from "@/components/mistakes/16-duplicate-fetch-metadata/right";
import { Wrong as W17 } from "@/components/mistakes/17-hydration-errors/wrong";
import { Right as R17 } from "@/components/mistakes/17-hydration-errors/right";
import { Wrong as W18 } from "@/components/mistakes/18-layout-persistent-fetch/wrong";
import { Right as R18 } from "@/components/mistakes/18-layout-persistent-fetch/right";
import { Wrong as W19 } from "@/components/mistakes/19-cache-expensive-functions/wrong";
import { Right as R19 } from "@/components/mistakes/19-cache-expensive-functions/right";
import { Wrong as W20 } from "@/components/mistakes/20-env-vars-client/wrong";
import { Right as R20 } from "@/components/mistakes/20-env-vars-client/right";
import { Wrong as W21 } from "@/components/mistakes/21-error-tsx/wrong";
import { Right as R21 } from "@/components/mistakes/21-error-tsx/right";
import { Wrong as W22 } from "@/components/mistakes/22-dynamic-metadata-export/wrong";
import { Right as R22 } from "@/components/mistakes/22-dynamic-metadata-export/right";
import { Wrong as W23 } from "@/components/mistakes/23-cache-request-memoization/wrong";
import { Right as R23 } from "@/components/mistakes/23-cache-request-memoization/right";
import { Wrong as W24 } from "@/components/mistakes/24-redirect-vs-router-push/wrong";
import { Right as R24 } from "@/components/mistakes/24-redirect-vs-router-push/right";
import { Wrong as W25 } from "@/components/mistakes/25-next-font/wrong";
import { Right as R25 } from "@/components/mistakes/25-next-font/right";
import { Wrong as W26 } from "@/components/mistakes/26-remove-console/wrong";
import { Right as R26 } from "@/components/mistakes/26-remove-console/right";
import { Wrong as W27 } from "@/components/mistakes/27-image-sizes/wrong";
import { Right as R27 } from "@/components/mistakes/27-image-sizes/right";
import { Wrong as W28 } from "@/components/mistakes/28-cache-tags/wrong";
import { Right as R28 } from "@/components/mistakes/28-cache-tags/right";
import { Wrong as W29 } from "@/components/mistakes/29-mutations-in-rsc/wrong";
import { Right as R29 } from "@/components/mistakes/29-mutations-in-rsc/right";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MistakeView = ComponentType<any>;

export type MistakeViews = {
  Wrong: MistakeView;
  Right: MistakeView;
};

const registry: Record<string, MistakeViews> = {
  "use-client-on-root": { Wrong: W01, Right: R01 },
  "unprotected-server-actions": { Wrong: W02, Right: R02 },
  "gets-in-use-server-file": { Wrong: W03, Right: R03 },
  "ai-code-without-review": { Wrong: W04, Right: R04 },
  "route-handlers-vs-rsc": { Wrong: W05, Right: R05 },
  "suspense-wrong-level": { Wrong: W06, Right: R06 },
  "use-cache-vs-private": { Wrong: W07, Right: R07 },
  "update-tag-vs-refresh": { Wrong: W08, Right: R08 },
  "context-provider-layout": { Wrong: W09, Right: R09 },
  "window-in-server-component": { Wrong: W10, Right: R10 },
  "unnecessary-use-client": { Wrong: W11, Right: R11 },
  "revalidate-after-mutation": { Wrong: W12, Right: R12 },
  "redirect-in-try-catch": { Wrong: W13, Right: R13 },
  "force-server-interactive": { Wrong: W14, Right: R14 },
  "loading-tsx": { Wrong: W15, Right: R15 },
  "duplicate-fetch-metadata": { Wrong: W16, Right: R16 },
  "hydration-errors": { Wrong: W17, Right: R17 },
  "layout-persistent-fetch": { Wrong: W18, Right: R18 },
  "cache-expensive-functions": { Wrong: W19, Right: R19 },
  "env-vars-client": { Wrong: W20, Right: R20 },
  "error-tsx": { Wrong: W21, Right: R21 },
  "dynamic-metadata-export": { Wrong: W22, Right: R22 },
  "cache-request-memoization": { Wrong: W23, Right: R23 },
  "redirect-vs-router-push": { Wrong: W24, Right: R24 },
  "next-font": { Wrong: W25, Right: R25 },
  "remove-console": { Wrong: W26, Right: R26 },
  "image-sizes": { Wrong: W27, Right: R27 },
  "cache-tags": { Wrong: W28, Right: R28 },
  "mutations-in-rsc": { Wrong: W29, Right: R29 },
};

export function getMistakeViews(slug: string): MistakeViews | undefined {
  return registry[slug];
}
