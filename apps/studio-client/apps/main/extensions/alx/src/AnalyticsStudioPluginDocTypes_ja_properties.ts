import ResourceBundleUtil from "@jangaroo/runtime/l10n/ResourceBundleUtil";
import AnalyticsStudioPluginDocTypes_properties from "./AnalyticsStudioPluginDocTypes_properties";

/**
 * Overrides of ResourceBundle "AnalyticsStudioPluginDocTypes" for Locale "ja".
 * @see AnalyticsStudioPluginDocTypes_properties#INSTANCE
 */
ResourceBundleUtil.override(AnalyticsStudioPluginDocTypes_properties, {
  CMALXBaseList_text: "アナリティクスベースリスト",
  CMALXPageList_text: "アナリティクスページリスト",
  CMALXPageList_documentType_text: "ドキュメントの種類",
  CMALXPageList_documentType_emptyText: "必要なドキュメントの種類。",
  CMALXPageList_baseChannel_text: "ベースチャネル",
  CMALXPageList_baseChannel_emptyText: "希望のドキュメントが置かれているベースチャネルをここに入力します。",
  CMALXPageList_defaultContent_text: "デフォルトコンテンツ",
  CMALXPageList_defaultContent_emptyText: "表示するデフォルトドキュメントをライブラリから追加します。",
  CMALXBaseList_maxLength_text: "最大文字数",
  CMALXBaseList_maxLength_emptyText: "アナリティクスページリストの最大文字数を入力します。",
  CMALXBaseList_timeRange_text: "時間範囲",
  CMALXBaseList_timeRange_emptyText: "含めるデータの時間範囲を入力します（本日を除く日数）。",
  CMALXBaseList_analyticsProvider_text: "アナリティクスプロバイダーのID",
  CMALXBaseList_analyticsProvider_emptyText: "ここにアナリティクスプロバイダーのIDを入力します。",
  CMALXEventList_text: "アナリティクスイベントリスト",
  CMALXEventList_category_text: "イベントカテゴリ",
  CMALXEventList_category_emptyText: "トラッキングするオブジェクトグループに付けられた名前を入力します（「ビデオ」など）",
  CMALXEventList_action_text: "イベントアクション",
  CMALXEventList_action_emptyText: "トラッキングするイベントまたは操作の種類を入力します（「再生を押した」など）",
  "CMChannel_localSettings.analyticsProvider_text": "デフォルトのアナリティクスプロバイダーの名前",
  "CMChannel_localSettings.analyticsProvider_emptyText": "ここにデフォルトのアナリティクスプロバイダーのIDを入力します。",
});
