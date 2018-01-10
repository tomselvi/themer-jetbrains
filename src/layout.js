export default (colorSet, name) => `<scheme name="themer-${name}" parent_scheme="Default">
    <option name="FONT_SCALE" value="1.0"/>
    <option name="LINE_SPACING" value="1.4"/>
    <font>
        <option name="EDITOR_FONT_NAME" value="Fira Mono"/>
        <option name="EDITOR_FONT_SIZE" value="12"/>
    </font>
    <font>
        <option name="EDITOR_FONT_NAME" value="Menlo"/>
        <option name="EDITOR_FONT_SIZE" value="12"/>
    </font>
    <font>
        <option name="EDITOR_FONT_NAME" value="Source Code Pro"/>
        <option name="EDITOR_FONT_SIZE" value="12"/>
    </font>
    <option name="CONSOLE_FONT_NAME" value="Menlo"/>
    <option name="CONSOLE_LINE_SPACING" value="1.4"/>
    <colors>
        <option name="ADDED_LINES_COLOR" value="${colorSet.accent3}"/>
        <option name="ANNOTATIONS_COLOR" value="${colorSet.shade7}"/>
        <option name="BORDER_LINES_COLOR" value=""/>
        <option name="CARET_COLOR" value="${colorSet.shade5}"/>
        <option name="CARET_ROW_COLOR" value="${colorSet.shade0}"/>
        <option name="CONSOLE_BACKGROUND_KEY" value="${colorSet.shade0}"/>
        <option name="DELETED_LINES_COLOR" value="${colorSet.accent1}"/>
        <option name="DIFF_SEPARATORS_BACKGROUND" value="${colorSet.shade0}"/>
        <option name="DIFF_SEPARATORS_TOP_BORDER" value="${colorSet.shade0}"/>
        <option name="DOCUMENTATION_COLOR" value="${colorSet.shade1}"/>
        <option name="FILESTATUS_ADDED" value="${colorSet.accent3}"/>
        <option name="FILESTATUS_COPIED" value="${colorSet.accent3}"/>
        <option name="FILESTATUS_DELETED" value="${colorSet.shade2}"/>
        <option name="FILESTATUS_HIJACKED" value="${colorSet.accent2}"/>
        <option name="FILESTATUS_IDEA_FILESTATUS_DELETED_FROM_FILE_SYSTEM" value="${colorSet.shade2}"/>
        <option name="FILESTATUS_IDEA_FILESTATUS_IGNORED" value="${colorSet.shade3}"/>
        <option name="FILESTATUS_IDEA_FILESTATUS_MERGED_WITH_BOTH_CONFLICTS" value="${colorSet.accent7}"/>
        <option name="FILESTATUS_IDEA_FILESTATUS_MERGED_WITH_CONFLICTS" value="${colorSet.accent7}"/>
        <option name="FILESTATUS_IDEA_FILESTATUS_MERGED_WITH_PROPERTY_CONFLICTS" value="${colorSet.accent7}"/>
        <option name="FILESTATUS_IDEA_SVN_FILESTATUS_EXTERNAL" value="${colorSet.accent3}"/>
        <option name="FILESTATUS_IGNORE.PROJECT_VIEW.IGNORED" value="${colorSet.shade3}"/>
        <option name="FILESTATUS_MERGED" value="${colorSet.accent6}"/>
        <option name="FILESTATUS_MODIFIED" value="${colorSet.accent5}"/>
        <!--<option name="FILESTATUS_NOT_CHANGED" value="626669"/>-->
        <option name="FILESTATUS_NOT_CHANGED_IMMEDIATE" value="${colorSet.accent5}"/>
        <option name="FILESTATUS_NOT_CHANGED_RECURSIVE" value="${colorSet.accent5}"/>
        <option name="FILESTATUS_SWITCHED" value="${colorSet.accent6}"/>
        <option name="FILESTATUS_SUPPRESSED" value="${colorSet.shade2}"/>
        <option name="FILESTATUS_UNKNOWN" value="${colorSet.accent1}"/>
        <option name="FILESTATUS_addedOutside" value="${colorSet.accent3}"/>
        <option name="FILESTATUS_changelistConflict" value="${colorSet.accent7}"/>
        <option name="FILESTATUS_modifiedOutside" value="${colorSet.accent3}"/>
        <option name="GUTTER_BACKGROUND" value="${colorSet.shade0}"/>
        <option name="INDENT_GUIDE" value="${colorSet.shade1}"/>
        <option name="INFORMATION_HINT" value="${colorSet.shade1}"/>
        <option name="LINE_NUMBERS_COLOR" value="${colorSet.shade2}"/>
        <option name="METHOD_SEPARATORS_COLOR" value="${colorSet.shade2}"/>
        <option name="MODIFIED_LINES_COLOR" value="${colorSet.accent2}"/>
        <option name="NOT_CHANGED" value="${colorSet.shade2}"/>
        <option name="NOTIFICATION_BACKGROUND" value="${colorSet.shade0}"/>
        <option name="NOT_CHANGED" value="${colorSet.shade4}"/>
        <option name="QUESTION_HINT" value="${colorSet.shade1}"/>
        <option name="READONLY_FRAGMENT_BACKGROUND" value=""/>
        <option name="RECURSIVE_CALL_ATTRIBUTES" value="${colorSet.shade0}"/>
        <option name="RIGHT_MARGIN_COLOR" value="${colorSet.shade2}"/>
        <option name="SELECTED_INDENT_GUIDE" value="${colorSet.accent5}"/>
        <option name="SELECTED_TEARLINE_COLOR" value="${colorSet.shade4}"/>
        <option name="SELECTION_BACKGROUND" value="${colorSet.shade2}"/>
        <option name="SELECTION_FOREGROUND" value="${colorSet.shade7}"/>
        <option name="SOFT_WRAP_SIGN_COLOR" value="${colorSet.shade1}"/>
        <option name="MT_SUPPRESSED" value="${colorSet.shade7}"/>
        <option name="MT_IGNORE.PROJECT_VIEW.IGNORED" value="${colorSet.shade3}"/>
        <option name="TEARLINE_COLOR" value="${colorSet.shade1}"/>
        <option name="VCS_ANNOTATIONS_COLOR_1" value="${colorSet.shade2}"/>
        <option name="VCS_ANNOTATIONS_COLOR_2" value="${colorSet.shade2}"/>
        <option name="VCS_ANNOTATIONS_COLOR_3" value="${colorSet.shade1}"/>
        <option name="VCS_ANNOTATIONS_COLOR_4" value="${colorSet.accent4}"/>
        <option name="VCS_ANNOTATIONS_COLOR_5" value="${colorSet.accent1}"/>
        <option name="WHITESPACES" value="${colorSet.shade2}"/>
        <option name="WHITESPACES_MODIFIED_LINES_COLOR" value="${colorSet.shade2}"/>
    </colors>
    <attributes>
        <option name="ABSTRACT_CLASS_NAME_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="ANNOTATION_ATTRIBUTE_NAME_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="ANNOTATION_NAME_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="APACHE_CONFIG.ARG_LEXEM">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="APACHE_CONFIG.COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="APACHE_CONFIG.IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Abstract class name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Annotation">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="Anonymous class name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="Anotation attribute name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="BAD_CHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Bad character">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Block comment">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Braces">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Brackets">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="BASH.EXTERNAL_COMMAND">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="BASH.FUNCTION_CALL" baseAttributes="DEFAULT_FUNCTION_CALL"/>
        <option name="BASH.FUNCTION_DEF_NAME" baseAttributes="DEFAULT_FUNCTION_DECLARATION"/>
        <option name="BASH.HERE_DOC" baseAttributes="DEFAULT_STRING"/>
        <option name="BASH.INTERNAL_COMMAND" baseAttributes="BASH.EXTERNAL_COMMAND"/>
        <option name="BASH.REDIRECTION" baseAttributes="DEFAULT_OPERATION_SIGN"/>
        <option name="BASH.SHEBANG" baseAttributes="BASH.LINE_COMMENT"/>
        <option name="BLADE_BAD_CHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="BLADE_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="BLADE_DIRECTIVE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="BLADE_TEXT_BLOCK_BOUNDARY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="BNF_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="BNF_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="BOOKMARKS_ATTRIBUTES">
            <value>
                <option name="FONT_TYPE" value="1"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.shade6}"/>
            </value>
        </option>
        <option name="BROWSEWORDATCARET">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="BREADCRUMBS_CURRENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="BACKGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="BREADCRUMBS_DEFAULT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade4}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="BREADCRUMBS_HOVERED">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="BACKGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="BREADCRUMBS_INACTIVE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="BREAKPOINT_ATTRIBUTES">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
            </value>
        </option>
        <option name="BROWSEWORDATCARET">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="Bad character">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Block comment">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Braces">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Brackets">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="CLASS_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.BAD_CHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.BLOCK_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.BOOLEAN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.BRACE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.BRACKET">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.CLASS_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.COLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.EXPRESSIONS_SUBSTITUTION_MARK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.FUNCTION_BINDING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.FUNCTION_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.GLOBAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.JAVASCRIPT_CONTENT">
            <value/>
        </option>
        <option name="COFFEESCRIPT.JAVASCRIPT_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.LINE_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.LOCAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.OBJECT_KEY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.OPERATIONS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="COFFEESCRIPT.THIS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="CONDITIONALLY_NOT_COMPILED">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="CONSOLE_BLUE_BRIGHT_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="CONSOLE_BLUE_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="CONSOLE_CYAN_BRIGHT_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="CONSOLE_CYAN_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent4}"/>
            </value>
        </option>
        <option name="CONSOLE_ERROR_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="CONSOLE_GRAY_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade4}"/>
            </value>
        </option>
        <option name="CONSOLE_GREEN_BRIGHT_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="CONSOLE_GREEN_OUTPUT">
            <value>
                <option name="FOREGROUND" value="7f00"/>
            </value>
        </option>
        <option name="CONSOLE_MAGENTA_BRIGHT_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="CONSOLE_MAGENTA_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="CONSOLE_NORMAL_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="CONSOLE_OUTPUT">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="CONSOLE_RANGE_TO_EXECUTE">
            <value/>
        </option>
        <option name="CONSOLE_SYSTEM_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="CONSOLE_USER_INPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="CONSOLE_RED_BRIGHT_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="CONSOLE_RED_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="CONSOLE_SYSTEM_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="CONSOLE_USER_INPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="CONSOLE_WHITE_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="CONSOLE_YELLOW_BRIGHT_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="CONSOLE_YELLOW_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="CSS.COLOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="CSS.FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="CSS.HASH">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="CSS.IDENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="CSS.IMPORTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="CSS.KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="CSS.PROPERTY_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="CSS.PROPERTY_VALUE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="CSS.PSEUDO">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="CSS.TAG_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="CSS.URL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="CTRL_CLICKABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="CUSTOM_INVALID_STRING_ESCAPE_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="8000"/>
                <option name="BACKGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="CUSTOM_KEYWORD1_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="CUSTOM_KEYWORD2_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="CUSTOM_KEYWORD3_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="f9795"/>
            </value>
        </option>
        <option name="CUSTOM_KEYWORD4_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="CUSTOM_NUMBER_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Class">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="DEFAULT_ATTRIBUTE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_BLOCK_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DEFAULT_BRACKETS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DEFAULT_CLASS_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="DEFAULT_CLASS_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="DEFAULT_COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DEFAULT_CONSTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="DEFAULT_DOC_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_DOC_COMMENT_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="3"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="DEFAULT_DOC_COMMENT_TAG_VALUE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="3"/>
            </value>
        </option>
        <option name="DEFAULT_DOC_MARKUP">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="DEFAULT_DOT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DEFAULT_ENTITY">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="DEFAULT_FUNCTION_CALL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="DEFAULT_FUNCTION_DECLARATION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="DEFAULT_GLOBAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="DEFAULT_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="DEFAULT_INSTANCE_FIELD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="DEFAULT_INSTANCE_METHOD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="DEFAULT_INTERFACE_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_INVALID_STRING_ESCAPE">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_LABEL">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="DEFAULT_LINE_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_LOCAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="DEFAULT_METADATA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="DEFAULT_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="DEFAULT_OPERATION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DEFAULT_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="DEFAULT_PARENTHS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DEFAULT_PREDEFINED_SYMBOL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="DEFAULT_SEMICOLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DEFAULT_STATIC_FIELD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="DEFAULT_STATIC_METHOD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="DEFAULT_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="DEFAULT_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="DEFAULT_TEMPLATE_LANGUAGE_COLOR">
            <value>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="DEFAULT_VALID_STRING_ESCAPE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="DELETED_TEXT_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent0}"/>
                <option name="EFFECT_TYPE" value="3"/>
            </value>
        </option>
        <option name="DEPRECATED_ATTRIBUTES">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.shade5}"/>
                <option name="EFFECT_TYPE" value="3"/>
            </value>
        </option>
        <option name="DIFF_CONFLICT">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.accent0}"/>
            </value>
        </option>
        <option name="DIFF_DELETED">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="DIFF_INSERTED">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="DIFF_MODIFIED">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="DJANGO_FILTER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="DJANGO_TAG_START_END">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="DUPLICATE_FROM_SERVER">
            <value/>
        </option>
        <option name="EJS_OPEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="EJS_OPEN_EQ">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="EJS_OPEN_EQ_EQ">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="EJS_OPEN_EQ_GENERATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="EJS_OPEN_FILTER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="ELIXIR_ALIAS" baseAttributes="DEFAULT_CLASS_NAME"/>
        <option name="ELIXIR_BIT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="ELIXIR_BRACES" baseAttributes="DEFAULT_BRACES"/>
        <option name="ELIXIR_BRACKET" baseAttributes="DEFAULT_BRACKETS"/>
        <option name="ELIXIR_CALLBACK" baseAttributes="ELIXIR_SPECIFICATION"/>
        <option name="ELIXIR_CHAR_LIST" baseAttributes="DEFAULT_STRING"/>
        <option name="ELIXIR_CHAR_TOKEN" baseAttributes="DEFAULT_ENTITY"/>
        <option name="ELIXIR_DOT" baseAttributes="DEFAULT_DOT"/>
        <option name="ELIXIR_EXPRESSION_SUBSTITUTION_MARK" baseAttributes="DEFAULT_BRACES"/>
        <option name="ELIXIR_FUNCTION_CALL" baseAttributes="DEFAULT_FUNCTION_CALL"/>
        <option name="ELIXIR_IGNORED_VARIABLE" baseAttributes="ELIXIR_VARIABLE"/>
        <option name="ELIXIR_MACRO_CALL" baseAttributes="ELIXIR_FUNCTION_CALL"/>
        <option name="ELIXIR_MAP" baseAttributes="DEFAULT_BRACES"/>
        <option name="ELIXIR_OPERATION_SIGN" baseAttributes="DEFAULT_OPERATION_SIGN"/>
        <option name="ELIXIR_PARAMETER" baseAttributes="DEFAULT_PARAMETER"/>
        <option name="ELIXIR_PARENTHESES" baseAttributes="DEFAULT_PARENTHS"/>
        <option name="ELIXIR_PREDEFINED" baseAttributes="DEFAULT_PREDEFINED_SYMBOL"/>
        <option name="ELIXIR_SIGIL" baseAttributes="DEFAULT_TEMPLATE_LANGUAGE_COLOR"/>
        <option name="ELIXIR_SPECIFICATION" baseAttributes="DEFAULT_FUNCTION_DECLARATION"/>
        <option name="ELIXIR_STRING" baseAttributes="DEFAULT_STRING"/>
        <option name="ELIXIR_STRUCT" baseAttributes="ELIXIR_MAP"/>
        <option name="ELIXIR_TYPE" baseAttributes="DEFAULT_METADATA"/>
        <option name="ELIXIR_TYPE_PARAMETER" baseAttributes="DEFAULT_PARAMETER"/>
        <option name="ELIXIR_VALID_ESCAPE_SEQUENCE" baseAttributes="DEFAULT_VALID_STRING_ESCAPE"/>
        <option name="ELIXIR_VARIABLE" baseAttributes="DEFAULT_LOCAL_VARIABLE"/>
        <option name="ELM_ARROW" baseAttributes="DEFAULT_OPERATION_SIGN"/>
        <option name="ELM_BRACES" baseAttributes="DEFAULT_BRACES"/>
        <option name="ELM_BRACKETS" baseAttributes="DEFAULT_BRACKETS"/>
        <option name="ELM_COMMA" baseAttributes="DEFAULT_COMMA"/>
        <option name="ELM_DEFINITION_NAME" baseAttributes="DEFAULT_FUNCTION_DECLARATION"/>
        <option name="ELM_EQ" baseAttributes="DEFAULT_OPERATION_SIGN"/>
        <option name="ELM_OPERATOR" baseAttributes="DEFAULT_OPERATION_SIGN"/>
        <option name="ELM_PARENTHESIS" baseAttributes="DEFAULT_PARENTHS"/>
        <option name="ELM_PIPE" baseAttributes="DEFAULT_OPERATION_SIGN"/>
        <option name="ELM_TYPE" baseAttributes="DEFAULT_CLASS_NAME"/>
        <option name="ELM_TYPE_ANNOTATION_NAME" baseAttributes="DEFAULT_FUNCTION_DECLARATION"/>
        <option name="ELM_TYPE_ANNOTATION_SIGNATURE_TYPES" baseAttributes="DEFAULT_CLASS_REFERENCE"/>
        <option name="ENUM_CONST">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade3}"/>
            </value>
        </option>
        <option name="ERL_ATOM" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="ERL_MACRO" baseAttributes="DEFAULT_STATIC_FIELD"/>
        <option name="ERL_RECORDS" baseAttributes="DEFAULT_INSTANCE_FIELD"/>
        <option name="ERL_VARIABLES" baseAttributes="DEFAULT_GLOBAL_VARIABLE"/>
        <option name="ERRORS_ATTRIBUTES">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="EXECUTIONPOINT_ATTRIBUTES">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="Enum name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="FOLDED_TEXT_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="FOLLOWED_HYPERLINK_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="GENERIC_SERVER_ERROR_OR_WARNING">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent1}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="GHERKIN_OUTLINE_PARAMETER_SUBSTITUTION" baseAttributes="DEFAULT_INSTANCE_FIELD"/>
        <option name="GHERKIN_PYSTRING" baseAttributes="DEFAULT_STRING"/>
        <option name="GHERKIN_REGEXP_PARAMETER" baseAttributes="DEFAULT_PARAMETER"/>
        <option name="GROOVY_KEYWORD" baseAttributes="JAVA_KEYWORD"/>
        <option name="GO_BAD_TOKEN">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="GO_BLOCK_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="GO_BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="GO_BRACKET">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="GO_BUILTIN_CONSTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="GO_BUILTIN_FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="GO_BUILTIN_TYPE_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="GO_BUILTIN_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="GO_COLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="GO_COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="GO_COMMENT_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="3"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="GO_DOT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="GO_EXPORTED_FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="GO_FUNCTION_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="GO_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="GO_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="GO_LABEL">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="GO_LINE_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="GO_LOCAL_CONSTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="GO_LOCAL_FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="GO_LOCAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="GO_METHOD_RECEIVER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="GO_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="GO_OPERATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="GO_PACKAGE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_EXPORTED_CONSTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_EXPORTED_INTERFACE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_EXPORTED_STRUCT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_EXPORTED_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_LOCAL_CONSTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_LOCAL_INTERFACE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_LOCAL_STRUCT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="GO_PACKAGE_LOCAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="GO_PARENTHESES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="GO_SCOPE_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="GO_SEMICOLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="GO_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="GO_STRUCT_EXPORTED_MEMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="GO_STRUCT_LOCAL_MEMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="GO_TYPE_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="GO_TYPE_SPECIFICATION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="HAML_CLASS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="HAML_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="HAML_RUBY_START">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HAML_TAG_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="HAML_XHTML">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="HOCON_BAD_CHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HOCON_BOOLEAN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HOCON_BRACKETS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_DOUBLE_SLASH_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HOCON_HASH_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HOCON_INCLUDE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HOCON_INCLUDE_MODIFIER_PARENS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_INVALID_STRING_ESCAPE">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HOCON_KEY_VALUE_SEPARATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_MULTILINE_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="HOCON_NULL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HOCON_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="HOCON_OBJECT_BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_OPTIONAL_SUBSTITUTION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_QUOTED_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="HOCON_SUBSTITUTION_BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_SUBSTITUTION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HOCON_UNQUOTED_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="HOCON_VALID_STRING_ESCAPE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="HTML_ATTRIBUTE_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="HTML_ATTRIBUTE_VALUE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="HTML_ENTITY_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="HTML_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="HTML_TAG_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="HYPERLINK_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="IDENTIFIER_UNDER_CARET_ATTRIBUTES">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.shade7}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="IGNORE.BRACKET" baseAttributes="DEFAULT_KEYWORD"/>
        <option name="IGNORE.COMMENT" baseAttributes="DEFAULT_LINE_COMMENT"/>
        <option name="IGNORE.HEADER" baseAttributes="DEFAULT_DOC_COMMENT_TAG"/>
        <option name="IGNORE.NEGATION" baseAttributes="DEFAULT_KEYWORD"/>
        <option name="IGNORE.SECTION" baseAttributes="DEFAULT_DOC_COMMENT"/>
        <option name="IGNORE.SLASH" baseAttributes="DEFAULT_COMMA"/>
        <option name="IGNORE.SYNTAX" baseAttributes="DEFAULT_INSTANCE_FIELD"/>
        <option name="IGNORE.VALUE" baseAttributes="DEFAULT_STRING"/>
        <option name="IMPLICIT_ANONYMOUS_CLASS_PARAMETER_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="INFO_ATTRIBUTES">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent3}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.shade4}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="INJECTED_LANGUAGE_FRAGMENT">
            <value/>
        </option>
        <option name="INLINE_PARAMETER_HINT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="BACKGROUND" value="${colorSet.shade3}"/>
            </value>
        </option>
        <option name="INSTANCE_FIELD_ATTRIBUTES" baseAttributes="DEFAULT_INSTANCE_FIELD"/>
        <option name="IVAR">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade3}"/>
            </value>
        </option>
        <option name="Implicit conversion">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Instance field">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Instance property reference ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Interface name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Interpolated String Injection">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Invalid string escape">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="JADE_FILE_PATH" baseAttributes="DEFAULT_STRING"/>
        <option name="JADE_FILTER_NAME" baseAttributes="DEFAULT_LABEL"/>
        <option name="JADE_JS_BLOCK" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="JADE_STATEMENTS" baseAttributes="DEFAULT_KEYWORD"/>
        <option name="JAVA_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="JAVA_VALID_STRING_ESCAPE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="JFLEX_MACROS_REF">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="JS.DECORATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="JS.GLOBAL_FUNCTION" baseAttributes="DEFAULT_FUNCTION_DECLARATION"/>
        <option name="JS.GLOBAL_VARIABLE" baseAttributes="DEFAULT_GLOBAL_VARIABLE"/>
        <option name="JS.INSTANCE_MEMBER_FUNCTION" baseAttributes="DEFAULT_INSTANCE_METHOD"/>
        <option name="JS.INSTANCE_MEMBER_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="JS.LOCAL_VARIABLE" baseAttributes="DEFAULT_LOCAL_VARIABLE"/>
        <option name="JS.PARAMETER" baseAttributes="DEFAULT_PARAMETER"/>
        <option name="JS.REGEXP" baseAttributes="DEFAULT_STRING"/>
        <option name="JSON.KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="JSON.PROPERTY_KEY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="JSP_DIRECTIVE_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="JSP_SCRIPTING_BACKGROUND">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="KOTLIN_ANNOTATION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="KOTLIN_BACKING_FIELD_VARIABLE">
            <value/>
        </option>
        <option name="KOTLIN_DYNAMIC_PROPERTY_CALL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="KOTLIN_FUNCTION_LITERAL_BRACES_AND_ARROW">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="KOTLIN_IMPLICIT_EXHAUSTIVE_WHEN">
            <value/>
        </option>
        <option name="KOTLIN_LABEL" baseAttributes="DEFAULT_LABEL"/>
        <option name="KOTLIN_MUTABLE_VARIABLE">
            <value>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="KOTLIN_NAMED_ARGUMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="KOTLIN_PACKAGE_FUNCTION_CALL" baseAttributes="DEFAULT_STATIC_METHOD"/>
        <option name="KOTLIN_PROPERTY_WITH_BACKING_FIELD">
            <value/>
        </option>
        <option name="KOTLIN_SMART_CAST_RECEIVER">
            <value/>
        </option>
        <option name="KOTLIN_SMART_CAST_VALUE">
            <value/>
        </option>
        <option name="KOTLIN_SMART_CONSTANT">
            <value/>
        </option>
        <option name="LABEL">
            <value>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="LESS_VARIABLE" baseAttributes="DEFAULT_INSTANCE_FIELD"/>
        <option name="LINE_FULL_COVERAGE">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
            </value>
        </option>
        <option name="LINE_NONE_COVERAGE">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
                <option name="EFFECT_TYPE" value="3"/>
            </value>
        </option>
        <option name="LINE_PARTIAL_COVERAGE">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
            </value>
        </option>
        <option name="LOG_ERROR_OUTPUT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Label">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Line comment">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="List/map to object conversion">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="LUA_DEFINED_CONSTANTS" baseAttributes="DEFAULT_CONSTANT"/>
        <option name="LUA_FIELD" baseAttributes="DEFAULT_STATIC_FIELD"/>
        <option name="LUA_GLOBAL_VAR" baseAttributes="DEFAULT_GLOBAL_VARIABLE"/>
        <option name="LUA_LOCAL_VAR" baseAttributes="DEFAULT_LOCAL_VARIABLE"/>
        <option name="LUA_LUADOC" baseAttributes="DEFAULT_DOC_COMMENT"/>
        <option name="LUA_PARAMETER" baseAttributes="DEFAULT_PARAMETER"/>
        <option name="LUA_UPVAL" baseAttributes="LUA_LOCAL_VAR"/>
        <option name="List/map to object conversion" baseAttributes="JAVA_NUMBER"/>
        <option name="MACRONAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MAKO.SUBSTITUTION" baseAttributes="DEFAULT_TEMPLATE_LANGUAGE_COLOR"/>
        <option name="MARKDOWN.AUTO_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="MARKDOWN.BULLET_LIST">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="MARKDOWN.EXPLICIT_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN.HEADER_LEVEL_1">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="MARKDOWN.HEADER_LEVEL_2">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="MARKDOWN.HEADER_LEVEL_3">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="MARKDOWN.HEADER_LEVEL_4">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="MARKDOWN.HEADER_LEVEL_5">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="MARKDOWN.IMAGE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="MARKDOWN.MAIL_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="MARKDOWN.REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="MARKDOWN.REFERENCE_IMAGE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="MARKDOWN.REFERENCE_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="MARKDOWN.TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="MARKDOWN_AUTO_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_BLOCK_QUOTE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_BLOCK_QUOTE_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_BOLD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_BOLD_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_CODE_BLOCK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="MARKDOWN_CODE_FENCE">
            <value/>
        </option>
        <option name="MARKDOWN_CODE_SPAN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_CODE_SPAN_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_EXPLICIT_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_HEADER_LEVEL_1">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_HEADER_LEVEL_2">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_HEADER_LEVEL_3">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="4"/>
            </value>
        </option>
        <option name="MARKDOWN_HEADER_LEVEL_4">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="4"/>
            </value>
        </option>
        <option name="MARKDOWN_HEADER_LEVEL_5">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="4"/>
            </value>
        </option>
        <option name="MARKDOWN_HEADER_LEVEL_6">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="4"/>
            </value>
        </option>
        <option name="MARKDOWN_HEADER_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="MARKDOWN_HRULE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="MARKDOWN_IMAGE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="MARKDOWN_INLINE_HTML">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_ITALIC">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_ITALIC_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_LINK_DEFINITION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_LINK_DESTINATION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_LINK_LABEL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_LINK_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_LINK_TITLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="MARKDOWN_LIST_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_STRIKE_THROUGH">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.shade4}"/>
                <option name="EFFECT_TYPE" value="3"/>
            </value>
        </option>
        <option name="MARKDOWN_TABLE_SEPARATOR">
            <value/>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ABBREVIATED_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ABBREVIATION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ABBREVIATION_EXPANDED_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ABBREVIATION_SHORT_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ANCHOR_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ATX_HEADER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.AUTO_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.BOLD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.BOLD_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.BULLET_LIST">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.CODE">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.CODE_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.DEFINITION_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.DEFINITION_TERM">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.EMOJI_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.EMOJI_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.EXPLICIT_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.FOOTNOTE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.FOOTNOTE_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.FOOTNOTE_REF">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.HEADER_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="1"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>

        <option name="MARKDOWN_NAVIGATOR.HRULE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="EFFECT_COLOR" value="${colorSet.shade2}"/>
                <option name="EFFECT_TYPE" value="4"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.HTML_BLOCK">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.HTML_ENTITY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.IMAGE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.IMAGE_ALT_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.IMAGE_LINK_REF_TITLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="1"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.IMAGE_LINK_REF">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.IMAGE_URL_CONTENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.INLINE_HTML">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ITALIC">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ITALIC_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.JEKYLL_FRONT_MATTER_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.JEKYLL_TAG_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.JEKYLL_TAG_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.JEKYLL_TAG_PARAMETERS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="1"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.LINE_BREAK_SPACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.LINK_REF">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.LINK_REF_ANCHOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.LINK_REF_ANCHOR_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.LINK_REF_TITLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.MAIL_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.ORDERED_LIST">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.QUOTE">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.QUOTED_TEXT">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.QUOTED_TEXT_ABBREVIATED_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.QUOTED_TEXT_HTML_ENTITY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.QUOTED_TEXT_SMARTS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.QUOTED_TEXT_SPECIAL_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.QUOTED_TEXT_SPECIAL_TEXT_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.REFERENCE_IMAGE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.REFERENCE_IMAGE_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.REFERENCE_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.REFERENCE_LINK_REF">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.REFERENCE_LINK_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.REFERENCE_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SETEXT_HEADER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SIM_TOC_TITLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SMARTS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SPECIAL_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.STRIKETHROUGH">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.shade5}"/>
                <option name="EFFECT_TYPE" value="3"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.STRIKETHROUGH_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SUBSCRIPT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.shade5}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SUBSCRIPT_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SUPERSCRIPT">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.shade7}"/>
                <option name="EFFECT_TYPE" value="4"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.SUPERSCRIPT_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_CAPTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_CAPTION_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_CELL_REVEN_CEVEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_CELL_REVEN_CODD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>

        <option name="MARKDOWN_NAVIGATOR.TABLE_CELL_RODD_CEVEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>

        <option name="MARKDOWN_NAVIGATOR.TABLE_CELL_RODD_CODD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>

        <option name="MARKDOWN_NAVIGATOR.TABLE_HDR_CELL_REVEN_CEVEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>

        <option name="MARKDOWN_NAVIGATOR.TABLE_HDR_CELL_REVEN_CODD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>

        <option name="MARKDOWN_NAVIGATOR.TABLE_HDR_ROW_EVEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_HDR_ROW_ODD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_ROW_EVEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_ROW_ODD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_SEPARATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_SEP_COLUMN_EVEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TABLE_SEP_COLUMN_ODD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TASK_DONE_ITEM_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TASK_ITEM_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.UNDERLINE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.shade5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TOC">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="3"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.TOC_OPTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.UNDERLINE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.shade5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.UNDERLINE_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.VERBATIM">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.VERBATIM_LANG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.VERBATIM_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.WIKI_LINK">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.WIKI_LINK_REF">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.WIKI_LINK_REF_ANCHOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.WIKI_LINK_REF_ANCHOR_MARKER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.WIKI_LINK_SEPARATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="MARKDOWN_NAVIGATOR.WIKI_LINK_TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MATCHED_BRACE_ATTRIBUTES">
            <value>
                <option name="FONT_TYPE" value="1"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent2}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="MESSAGE_ARGUMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="Map key">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Method call">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="NOT_TOP_FRAME_ATTRIBUTES">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade4}"/>
            </value>
        </option>
        <option name="NOT_USED_ELEMENT_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="EFFECT_COLOR" value="${colorSet.shade2}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Number">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="OC.BADCHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="OC.BLOCK_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="OC.BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.BRACKETS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.CLASS_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="OC.COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.CONDITIONALLY_NOT_COMPILED">
            <value/>
        </option>
        <option name="OC.CPP_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.DIRECTIVE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="OC.DOT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.ENUM_CONST">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="OC.EXTERN_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="OC.FORMAT_TOKEN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="OC.GENERIC_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="OC.GLOBAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="OC.HEADER_PATH">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade6}"/>
            </value>
        </option>
        <option name="OC.INVALID_STRING_ESCAPE">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="OC.IVAR">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="OC.KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="OC.LABEL">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="OC.LINE_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="OC.LOCAL_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="OC.MACRONAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="OC.MACRO_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="OC.MESSAGE_ARGUMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="OC.NAMESPACE_LIKE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="OC.NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="OC.OPERATION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.OVERLOADED_OPERATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="OC.PARENTHS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.PROPERTY">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="OC.PROPERTY_ATTRIBUTE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="OC.PROTOCOL_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="OC.SELFSUPERTHIS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="OC.SEMICOLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="OC.STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="OC.STRUCT_FIELD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="OC.STRUCT_LIKE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="OC.TEMPLATE_TYPE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="OC.TEMPLATE_VALUE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="OC.TYPEDEF">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="OC.VALID_STRING_ESCAPE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Operation sign">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PERL_ARRAY" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="PERL_ARRAY_BUILTIN" baseAttributes="PERL_ARRAY"/>
        <option name="PERL_DQ_STRING" baseAttributes="DEFAULT_STRING"/>
        <option name="PERL_DX_STRING" baseAttributes="DEFAULT_STRING"/>
        <option name="PERL_EMBED_MARKER" baseAttributes="DEFAULT_TEMPLATE_LANGUAGE_COLOR"/>
        <option name="PERL_GLOB" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="PERL_GLOB_BUILTIN" baseAttributes="PERL_GLOB"/>
        <option name="PERL_HASH" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="PERL_HASH_BUILTIN" baseAttributes="PERL_HASH"/>
        <option name="PERL_LABEL" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="PERL_NUMBER" baseAttributes="DEFAULT_NUMBER"/>
        <option name="PERL_PACKAGE" baseAttributes="DEFAULT_CLASS_NAME"/>
        <option name="PERL_PACKAGE_CORE" baseAttributes="PERL_PACKAGE"/>
        <option name="PERL_PACKAGE_PRAGMA" baseAttributes="PERL_PACKAGE"/>
        <option name="PERL_REGEX_TOKEN" baseAttributes="DEFAULT_STRING"/>
        <option name="PERL_SCALAR" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="PERL_SCALAR_BUILTIN" baseAttributes="PERL_SCALAR"/>
        <option name="PERL_SQ_STRING" baseAttributes="DEFAULT_STRING"/>
        <option name="PERL_SUB" baseAttributes="DEFAULT_FUNCTION_CALL"/>
        <option name="PERL_SUB_BUILTIN" baseAttributes="PERL_SUB"/>
        <option name="PERL_SUB_DEFINITION" baseAttributes="DEFAULT_FUNCTION_DECLARATION"/>
        <option name="PERL_VERSION" baseAttributes="PERL_NUMBER"/>
        <option name="PERL_XSUB" baseAttributes="PERL_SUB"/>
        <option name="PHP_BAD_CHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PHP_BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PHP_BRACKETS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PHP_CLASS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="PHP_COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PHP_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PHP_CONCATENATION">
            <value/>
        </option>
        <option name="PHP_CONSTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="PHP_DOC_COMMENT_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PHP_DOC_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="3"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="PHP_ESCAPE_SEQUENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PHP_EXEC_COMMAND_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_FUNCTION_CALL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_HEREDOC_CONTENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_HEREDOC_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="PHP_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="PHP_INSTANCE_FIELD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="PHP_INSTANCE_METHOD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_INTERFACE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PHP_MARKUP_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="PHP_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="PHP_OPERATION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PHP_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="PHP_PARENTHESES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PHP_PREDEFINED SYMBOL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_SCRIPTING_BACKGROUND">
            <value>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="PHP_SEMICOLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PHP_STATIC_FIELD">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PHP_STATIC_METHOD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PHP_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PHP_VAR">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="PHP_VAR_VAR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="POD_CODE" baseAttributes="DEFAULT_DOC_COMMENT"/>
        <option name="POD_TAG" baseAttributes="DEFAULT_DOC_COMMENT_TAG"/>
        <option name="POD_TEXT" baseAttributes="DEFAULT_DOC_COMMENT"/>
        <option name="PROPERTIES.INVALID_STRING_ESCAPE">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PROPERTIES.KEY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PROPERTIES.KEY_VALUE_SEPARATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PROPERTIES.VALID_STRING_ESCAPE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PROTOCOL_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent4}"/>
            </value>
        </option>
        <option name="PY.BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PY.BRACKETS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PY.BUILTIN_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PY.CLASS_DEFINITION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="PY.COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PY.DECORATOR">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PY.DOC_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PY.DOC_COMMENT_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="3"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="PY.DOT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PY.FUNC_DEFINITION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="PY.INVALID_STRING_ESCAPE">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PY.KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PY.KEYWORD_ARGUMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="PY.LINE_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PY.NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="PY.OPERATION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PY.PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="PY.PARENTHS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="PY.PREDEFINED_DEFINITION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PY.PREDEFINED_USAGE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="PY.SELF_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="PY.STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PY.STRING.B">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PY.STRING.U">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="PY.VALID_STRING_ESCAPE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Parentheses">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="QL_ATTRIBUTE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="QL_BAD_CHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="QL_COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="QL_DATETIME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="QL_DOT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="QL_ENTITY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="QL_FUNCTION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="QL_ID_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="QL_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="QL_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="QL_OPERATION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="QL_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="QL_PARENTHS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="QL_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="REGEXP.BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="REGEXP.BRACKETS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="REGEXP.CHAR_CLASS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="REGEXP.ESC_CHARACTER">
            <value/>
        </option>
        <option name="REGEXP.META">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="REGEXP.PARENTHS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="REGEXP.QUOTE_CHARACTER">
            <value/>
        </option>
        <option name="REGEXP.REDUNDANT_ESCAPE">
            <value/>
        </option>
        <option name="REST.FIXED">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="REST.INLINE">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="REST.INTERPRETED">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="RHTML_COMMENT_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RHTML_EXPRESSION_END_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RHTML_EXPRESSION_START_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RHTML_OMIT_NEW_LINE_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RHTML_SCRIPTING_BACKGROUND_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RHTML_SCRIPTLET_END_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RHTML_SCRIPTLET_START_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_BAD_CHARACTER">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RUBY_BRACES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_BRACKETS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_COLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_COMMA">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RUBY_CONSTANT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="RUBY_CONSTANT_DECLARATION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="RUBY_CVAR">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="RUBY_DOT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_ESCAPE_SEQUENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_EXPR_IN_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_GVAR">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="RUBY_HASH_ASSOC">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_HEREDOC_CONTENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="RUBY_HEREDOC_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="RUBY_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
            </value>
        </option>
        <option name="RUBY_INTERPOLATED_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="RUBY_INVALID_ESCAPE_SEQUENCE">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RUBY_IVAR">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="RUBY_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RUBY_LINE_CONTINUATION">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="RUBY_LOCAL_VAR_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="RUBY_METHOD_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="RUBY_NTH_REF">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="RUBY_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="RUBY_OPERATION_SIGN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_PARAMDEF_CALL">
            <value>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RUBY_PARAMETER_ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="RUBY_PARENTHESES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="RUBY_REGEXP">
            <value>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="RUBY_SEMICOLON">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="RUBY_SPECIFIC_CALL">
            <value>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="RUBY_STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="RUBY_SYMBOL">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="RUBY_WORDS">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_ATTRIBUTE_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_BLOCK_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_COMMENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_ENTITY_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_MVC_ACTION">
            <value>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_MVC_AREA">
            <value>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_MVC_CONTROLLER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_MVC_VIEW">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_MVC_VIEW_COMPONENT">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_RAZOR_CODE_BLOCK">
            <value/>
        </option>
        <option name="ReSharper.ASP_NET_RAZOR_CODE_BLOCK_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="ReSharper.ASP_NET_RUN_AT_ATTRIBUTE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="ReSharper.DELEGATE_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ReSharper.ENUM_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="ReSharper.EVENT_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="ReSharper.EXTENSION_METHOD_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="ReSharper.HINT">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="ReSharper.LATE_BOUND_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="ReSharper.MUTABLE_LOCAL_VARIABLE_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="ReSharper.NAMESPACE_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="ReSharper.STATIC_CLASS_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="ReSharper.STRUCT_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="ReSharper.TYPE_PARAMETER_IDENTIFIER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="SASS_COMMENT" baseAttributes="CSS.COMMENT"/>
        <option name="SASS_MIXIN">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="SASS_VARIABLE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="SEARCH_RESULT_ATTRIBUTES">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="SLIM_FILTER" baseAttributes="DEFAULT_LABEL"/>
        <option name="SLIM_FILTER_CONTENT" baseAttributes="DEFAULT_TEMPLATE_LANGUAGE_COLOR"/>
        <option name="SLIM_ID" baseAttributes="CSS.HASH"/>
        <option name="SLIM_RUBY_CODE" baseAttributes="DEFAULT_TEMPLATE_LANGUAGE_COLOR"/>
        <option name="STATIC_FIELD_ATTRIBUTES" baseAttributes="DEFAULT_STATIC_FIELD"/>
        <option name="STATIC_FINAL_FIELD_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="STATIC_METHOD_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="SUGGESTION">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.shade4}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala Abstract class">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Scala Annotation attribute name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="Scala Annotation name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="Scala Anonymous Parameter">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Scala Assign">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala Bad character">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala Block comment">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala Braces">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala Brackets">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala Class">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="Scala Class method call">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Scala Colon">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala Comma">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala Dot">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala For statement value">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Invalid escape in string">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent7}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala Keyword">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala Line comment">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala Local lazy val/var">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Local method call">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Scala Local value">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Local variable">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Method declaration">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Scala Mutable Collection">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="EFFECT_COLOR" value="${colorSet.accent6}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="Scala Number">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Scala Object">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="Scala Object method call">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala Parameter">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Scala Parentheses">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala Pattern value">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Predefined types">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala Semicolon">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala String">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Scala Template lazy val/var">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Template val">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Template var">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Scala Trait">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Scala Type Alias">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Scala Type parameter">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Scala Valid escape in string">
            <value/>
        </option>
        <option name="Scala XML attribute name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala XML attribute value">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Scala XML comment">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Scala XML tag">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="Scala XML tag data">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="Scala XML tag name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="ScalaDoc @param value">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ScalaDoc comment">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="ScalaDoc comment tag">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="ScalaDoc html escape sequences">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="ScalaDoc html tag">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="ScalaDoc wiki syntax elements">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="Scalatest keyword">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Static field">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="Static method access">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="STATIC_METHOD_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Static property reference ID">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="EFFECT_TYPE" value="1"/>
            </value>
        </option>
        <option name="String">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="TAPESTRY_COMPONENT_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="TEMPLATE_VARIABLE_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent6}"/>
            </value>
        </option>
        <option name="TEXT">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="BACKGROUND" value="${colorSet.shade0}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="TEXT_SEARCH_RESULT_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade1}"/>
                <option name="BACKGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="TODO_DEFAULT_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="TS.TYPE_PARAMETER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
            </value>
        </option>
        <option name="TYPEDEF">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade6}"/>
            </value>
        </option>
        <option name="TYPE_PARAMETER_NAME_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="TYPO">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent2}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="Trait name">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent3}"/>
            </value>
        </option>
        <option name="Type parameter">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="Unresolved reference access">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="UNMATCHED_BRACE_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent0}"/>
            </value>
        </option>
        <option name="VELOCITY_KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="VELOCITY_NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="VELOCITY_SCRIPTING_BACKGROUND">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="Valid string escape">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="WARNING_ATTRIBUTES">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.accent2}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.accent2}"/>
                <option name="EFFECT_TYPE" value="2"/>
            </value>
        </option>
        <option name="WRITE_IDENTIFIER_UNDER_CARET_ATTRIBUTES">
            <value>
                <option name="EFFECT_COLOR" value="${colorSet.shade7}"/>
                <option name="ERROR_STRIPE_COLOR" value="${colorSet.shade2}"/>
            </value>
        </option>
        <option name="WRITE_SEARCH_RESULT_ATTRIBUTES">
            <value>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
            </value>
        </option>
        <option name="WRONG_REFERENCES_ATTRIBUTES">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent7}"/>
            </value>
        </option>
        <option name="XML_ATTRIBUTE_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent2}"/>
                <option name="FONT_TYPE" value="2"/>
            </value>
        </option>
        <option name="XML_ENTITY_REFERENCE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade7}"/>
            </value>
        </option>
        <option name="XML_PROLOGUE">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="XML_TAG">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
            </value>
        </option>
        <option name="XML_TAG_DATA">
            <value>
                <option name="FOREGROUND" value="${colorSet.shade5}"/>
                <option name="BACKGROUND" value="${colorSet.shade1}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="XML_TAG_NAME">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="XPATH.KEYWORD">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="XPATH.NUMBER">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="XPATH.STRING">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
        <option name="XPATH.XPATH_NAME" baseAttributes="TEXT"/>
        <option name="XPATH.XPATH_VARIABLE" baseAttributes="DEFAULT_LOCAL_VARIABLE"/>
        <option name="YAML_SCALAR_KEY">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent1}"/>
            </value>
        </option>
        <option name="YAML_SCALAR_LIST">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="YAML_SCALAR_VALUE">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="EFFECT_TYPE" value="5"/>
            </value>
        </option>
        <option name="com.plan9.INSTRUCTION" baseAttributes="DEFAULT_PREDEFINED_SYMBOL"/>
        <option name="com.plan9.LABEL" baseAttributes="DEFAULT_LABEL"/>
        <option name="org.rust.DOC_CODE" baseAttributes="DEFAULT_DOC_MARKUP"/>
        <option name="org.rust.TYPE_PARAMETER" baseAttributes="DEFAULT_IDENTIFIER"/>
        <option name="osmorc.headerName">
            <value>
                <option name="FOREGROUND" value="${colorSet.accent5}"/>
                <option name="FONT_TYPE" value="1"/>
            </value>
        </option>
    </attributes>
</scheme>`;
