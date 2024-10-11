#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 Nom"
  exit 1
fi

COMPONENT_NAME="$1"
CAMEL_COMPONENT_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${COMPONENT_NAME:0:1})${COMPONENT_NAME:1}"

LOWER_COMPONENT_NAME=$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]')

COMPONENT_PATH="./src/components/$CAMEL_COMPONENT_NAME"

mkdir -p "$COMPONENT_PATH"

touch "$COMPONENT_PATH/$CAMEL_COMPONENT_NAME.stories.tsx"
touch "$COMPONENT_PATH/$CAMEL_COMPONENT_NAME.test.tsx"
touch "$COMPONENT_PATH/$CAMEL_COMPONENT_NAME.tsx"
touch "$COMPONENT_PATH/${LOWER_COMPONENT_NAME}.css"
touch "$COMPONENT_PATH/${LOWER_COMPONENT_NAME}Props.ts"

echo "Le composant '$CAMEL_COMPONENT_NAME' a été créé avec succès dans $COMPONENT_PATH"