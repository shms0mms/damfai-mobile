/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(read-book)` | `/(root)` | `/(root)/` | `/(root)/books` | `/(root)/books/[id]/` | `/(root)/catalog` | `/(root)/prettify` | `/(root)/prettify/` | `/(root)/race` | `/(root)/shop` | `/@modal/default` | `/_sitemap` | `/auth` | `/auth/sign-in` | `/auth/sign-up` | `/books` | `/books/[id]/` | `/catalog` | `/dashboard` | `/pass` | `/prettify` | `/prettify/` | `/race` | `/shop`;
      DynamicRoutes: `/(read-book)/books/read/${Router.SingleRoutePart<T>}` | `/(read-book)/books/read/${Router.SingleRoutePart<T>}/finish` | `/(root)/books/${Router.SingleRoutePart<T>}` | `/(root)/shop/extensions/${Router.SingleRoutePart<T>}` | `/@modal/(.)books/${Router.SingleRoutePart<T>}` | `/@modal/(.)dashboard/settings/${Router.SingleRoutePart<T>}` | `/@modal/(.)shop/extensions/${Router.SingleRoutePart<T>}` | `/books/${Router.SingleRoutePart<T>}` | `/books/read/${Router.SingleRoutePart<T>}` | `/books/read/${Router.SingleRoutePart<T>}/finish` | `/shop/extensions/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(read-book)/books/read/[id]` | `/(read-book)/books/read/[id]/finish` | `/(root)/books/[id]` | `/(root)/shop/extensions/[id]` | `/@modal/(.)books/[id]` | `/@modal/(.)dashboard/settings/[id]` | `/@modal/(.)shop/extensions/[id]` | `/books/[id]` | `/books/read/[id]` | `/books/read/[id]/finish` | `/shop/extensions/[id]`;
    }
  }
}
